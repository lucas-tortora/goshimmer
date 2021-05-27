declare module "vivagraphjs" {
    export namespace Graph {
        export interface ILink {
            id: string;
        }
        export interface IGraph {
            getLink: (nodeA: string, nodeB: string) => ILink | undefined;
            addLink: (nodeA: string, nodeB: string, data: any) => void;
            removeLink: (link: ILink) => void;
            getNode: (node: string) => string | undefined;
            addNode: (node: string) => void;
            removeNode: (node: string) => void;

            beginUpdate: () => void;
            endUpdate: () => void;
            forEachLink: (callback: (link: ILink) => void) => void;
        }

        export interface ILocation {
            vertexPos: number;
            customAttributes: number;
            transform: number[];
            screenSize: number;
        }

        export interface IWebGL {
            createProgram: (code: string, codeB: string) => WebGLProgram;
            getLocations: (program: WebGLProgram, commands: string[]) => ILocation;
            extendArray: (arr: Float32Array, numItems: number, itemSize: number) => Float32Array;
            copyArrayPart: (arr: Float32Array, from: number, to: number, itemSize: number) => Float32Array;
        }

        export interface IEvents {
            click: (handler: (node: { id: string }) => void) => void;
            mouseEnter: (handler: (node: { id: string }) => void) => void;
            mouseLeave: (handler: (node: { id: string }) => void) => void;
        }

        function graph(): IGraph;
        function webgl(context: WebGLRenderingContextBase): IWebGL;
        function webglInputEvents(graphics: View.IWebGLGraphics, graph: IGraph): IEvents;

        export namespace View {
            export interface IItem {

            }
            export interface IWebGLGraphics {
                link: (callback: () => IItem) => void;
                node: (callback: () => IItem) => void;
                getNodeUI: (nodeId: string) => {
                    color: string;
                    size: number;
                } | undefined;
                getLinkUI: (linkId: string) => {
                    color: number;
                } | undefined;
                setNodeProgram: (program: WebGLProgram) => void;
            }

            export interface IRenderer {
                run: () => void;
                dispose: () => void;
                getLayout: () => Layout.ILayout;
                rerender: () => void;
            }
            function webglGraphics(): IWebGLGraphics;
            function webglLine(color: string): IItem;

            function renderer(graph: IGraph, options: {
                container: HTMLElement | null;
                graphics: IWebGLGraphics;
                layout: Layout.ILayout;
                renderLinks: boolean;
            }): IRenderer;
        }

        export namespace Layout {
            export interface ISimulator {
                springLength: (size: number) => void;
            }
            export interface ILayout {
                simulator: ISimulator;
            }
            function forceDirected(
                graph: IGraph,
                options: {
                    springLength: number;
                    springCoeff: number;
                    dragCoeff: number;
                    stableThreshold: number;
                    gravity: number;
                    timeStep: number;
                    theta: number;
                    springTransform: (spring, link) => void;
                }): ILayout;
        }
    }
}
