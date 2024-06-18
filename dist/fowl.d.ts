// Generated by dts-bundle-generator v9.5.1

export declare class RectangleShape {
	x: number;
	y: number;
	w: number;
	h: number;
	color: string;
	constructor(x: number, y: number, w: number, h: number, color: string);
	draw(): void;
}
export type BaseObject = {
	draw(): unknown;
};
export type BaseObjectPos = {
	draw(): unknown;
	x: number;
	y: number;
};
export declare class Camera {
	x: any;
	y: any;
	lastX: any;
	lastY: any;
	lock: boolean;
	lockObject: any;
	constructor(x?: any, y?: any);
	draw(): void;
	follow(object: any): void;
	unfollow(): void;
}
export declare class BaseState {
	constructor();
	manager: StateManager;
	preloads: Record<string, any>;
	objects: Record<string, BaseObject>;
	prePreload(): Promise<void>;
	preload(): Promise<void>;
	finishPreload(): void;
	bg: RectangleShape;
	bgColor: string;
	camera: Camera;
	preCreate(): void;
	create(): void;
	preUpdate(delta: number): void;
	update(delta: number): void;
	add(object: BaseObject, name: string, callback?: () => void): void;
	remove(name: string | number, callback?: () => void): void;
	addPreload(name: string, data: any): void;
	getPreload(name: string): any;
	resetState(): void;
}
export declare class StateManager {
	scene: BaseState;
	constructor();
	switch(scene: BaseState): void;
}
export declare function getManager(): StateManager;
export declare class Music {
	source: string;
	audio: HTMLAudioElement;
	ready: boolean;
	constructor(source: string);
	play(force?: boolean): void;
	stop(): void;
}
export declare class Sound {
	source: string;
	constructor(source: string);
	play(): void;
}
export declare class Font {
	size: number;
	name: string;
	constructor(size?: number, name?: string);
	getMerged(): string;
	getSize(): number;
	getName(): string;
}
export declare class Sprite {
	src: string;
	scale: number;
	img: HTMLImageElement;
	x: any;
	y: any;
	w: number;
	h: number;
	constructor(src: string, x: any, y: any, scale?: number);
	draw(): void;
}
export declare class Group {
	objects: Record<string, BaseObjectPos>;
	x: number;
	y: number;
	constructor(x?: number, y?: number);
	draw(): void;
	add(object: Sprite, name: string, callback?: () => void): void;
	remove(name: string, callback?: () => void): void;
	get(name: string): BaseObjectPos;
}
export declare class Point {
	x: any;
	y: any;
	constructor(x: any, y: any);
}
export declare class LineShape {
	point1: Point;
	point2: Point;
	width: number;
	color: string;
	constructor(point1: Point, point2: Point, width: number, color: string);
	draw(): void;
}
export declare class OutlinedRectangleShape {
	x: number;
	y: number;
	w: number;
	h: number;
	color: string;
	outline_color: string;
	outline_width: number;
	constructor(x: number, y: number, w: number, h: number, color: string, outline_color: string, outline_width: number);
	draw(): void;
}
export declare class OutlinedTextLabel {
	x: number;
	y: number;
	font: Font;
	color: string;
	text: string;
	outline_color: string;
	outline_width: number;
	constructor(text: string, x: number, y: number, color: string, outline_color: string, outline_width: number, font: Font);
	draw(): void;
}
export declare class SlicedSprite {
	src: any;
	scale: number;
	img: HTMLImageElement;
	x: any;
	y: any;
	w: any;
	h: any;
	sx: any;
	sy: any;
	sw: any;
	sh: any;
	constructor(src: any, x: any, y: any, w: any, h: any, sx: any, sy: any, sw: any, sh: any, scale?: number);
	draw(): void;
}
export declare class TextLabel {
	x: number;
	y: number;
	font: Font;
	color: string;
	text: string;
	constructor(text: string, x: number, y: number, color: string, font: Font);
	draw(): void;
}
export declare class TileMap {
	data: any;
	offsetX: number;
	offsetY: number;
	tileSize: any;
	tilePaths: string[];
	constructor(data: any, tileSize: any, offsetX?: number, offsetY?: number);
	addTile(path: string): void;
	draw(): void;
	getCollision(obj1: any, tileX: number, tileY: number): boolean;
}
export declare class Rect {
	x: any;
	w: any;
	y: any;
	h: any;
	constructor(x: any, y: any, w: any, h: any);
}
declare const canvas: () => HTMLCanvasElement;
export declare enum CollisionSides {
	TOP = 0,
	BOTTOM = 1,
	LEFT = 2,
	RIGHT = 3
}
export declare const colors: {
	white: string;
	silver: string;
	gray: string;
	black: string;
	red: string;
	candyAppleRed: string;
	orange: string;
	yellowOrange: string;
	yellow: string;
	gold: string;
	lemon: string;
	yellowGreen: string;
	lime: string;
	green: string;
	darkGreen: string;
	teal: string;
	skyBlue: string;
	fowl: string;
	blue: string;
	deepBlue: string;
	violet: string;
	purple: string;
	fuchsia: string;
	hotPink: string;
	fullRed: string;
	fullGreen: string;
	fullBlue: string;
};
export type Controller = Record<string, {
	down: boolean;
}>;
export declare let controller: Controller;
export declare function getCollision(obj1: {
	x: number;
	w: any;
	y: number;
	h: any;
}, obj2: Rect): boolean;
export declare function getCollisionSide(obj1: {
	w: number;
	h: number;
	x: number;
	y: number;
}, obj2: {
	w: number;
	h: number;
	x: number;
	y: number;
}): CollisionSides | undefined;
export declare function getKeys(keys: any[]): boolean;
export declare function getMouseKeys(keys: any[]): boolean;
export declare function startGame(defaultScene: BaseState): void;

export {
	canvas as getCanvas,
};

export {};
