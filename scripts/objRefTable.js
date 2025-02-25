const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Car,
		C3.Behaviors.scrollto,
		C3.Plugins.TiledBg,
		C3.Plugins.Shape3D,
		C3.Behaviors.solid,
		C3.Plugins.Particles,
		C3.Behaviors.Pin,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Behaviors.Pin.Acts.PinByImagePoint
	];
};
self.C3_JsPropNameTable = [
	{Car: 0},
	{ScrollTo: 0},
	{Sprite: 0},
	{TiledBackground: 0},
	{Solid: 0},
	{"3DShape": 0},
	{Pin: 0},
	{Particles: 0},
	{Particles2: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{Sprite4: 0},
	{Sprite5: 0},
	{Sprite6: 0},
	{Screenshot2025022260845PM: 0},
	{tablechart: 0},
	{Screenshot2025022475120PM: 0},
	{Screenshot2025022261508PM: 0},
	{tablechart2: 0},
	{Screenshot2025022475437PM: 0},
	{Screenshot2025022473625PM: 0},
	{Screenshot2025022473734PM: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	_3DShape: class extends self.I3DShapeInstance {},
	Particles: class extends self.IParticlesInstance {},
	Particles2: class extends self.IParticlesInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Screenshot2025022260845PM: class extends self.ISpriteInstance {},
	tablechart: class extends self.ISpriteInstance {},
	Screenshot2025022475120PM: class extends self.ISpriteInstance {},
	Screenshot2025022261508PM: class extends self.ISpriteInstance {},
	tablechart2: class extends self.ISpriteInstance {},
	Screenshot2025022475437PM: class extends self.ISpriteInstance {},
	Screenshot2025022473625PM: class extends self.ISpriteInstance {},
	Screenshot2025022473734PM: class extends self.ISpriteInstance {}
}