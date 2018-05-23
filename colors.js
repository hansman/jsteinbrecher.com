import paper from 'paper';

const map = (val, rang1, rang2, rang3, rang4) => {
  return (val / (rang2 - rang1)) * (rang4 - rang3);
};

const mapColor = (val) => {
  return map(val, 0, 255, 0, 1);
};


const redColors = [
  new paper.Color(mapColor(155), mapColor(59), mapColor(85)),
  new paper.Color(mapColor(182), mapColor(101), mapColor(111)),
  new paper.Color(mapColor(194), mapColor(99), mapColor(120)),
  new paper.Color(mapColor(216), mapColor(132), mapColor(150)),
  new paper.Color(mapColor(168), mapColor(68), mapColor(97)),
  new paper.Color(mapColor(201), mapColor(112), mapColor(127)),
  new paper.Color(mapColor(124), mapColor(54), mapColor(92)),
  new paper.Color(mapColor(226), mapColor(154), mapColor(157)),
  new paper.Color(mapColor(137), mapColor(64), mapColor(46)),
  new paper.Color(mapColor(182), mapColor(79), mapColor(112)),
  new paper.Color(mapColor(219), mapColor(121), mapColor(139)),
  new paper.Color(mapColor(136), mapColor(56), mapColor(100)),
  new paper.Color(mapColor(175), mapColor(118), mapColor(61)),
  new paper.Color(mapColor(198), mapColor(78), mapColor(107)),
  new paper.Color(mapColor(194), mapColor(58), mapColor(55)),
  new paper.Color(mapColor(150), mapColor(58), mapColor(113)),
  new paper.Color(mapColor(238), mapColor(163), mapColor(171))
];

const yellowColors = [
  new paper.Color(mapColor(199), mapColor(158), mapColor(63)),
  new paper.Color(mapColor(246), mapColor(208), mapColor(64)),
  new paper.Color(mapColor(248), mapColor(240), mapColor(70)),
  new paper.Color(mapColor(191), mapColor(224), mapColor(76)),
  new paper.Color(mapColor(236), mapColor(249), mapColor(80)),
  new paper.Color(mapColor(242), mapColor(244), mapColor(88)),
  new paper.Color(mapColor(245), mapColor(209), mapColor(48)),
  new paper.Color(mapColor(197), mapColor(233), mapColor(82)),
  new paper.Color(mapColor(244), mapColor(244), mapColor(171)),
  new paper.Color(mapColor(242), mapColor(240), mapColor(186)),
  new paper.Color(mapColor(245), mapColor(202), mapColor(51))
];

export { redColors, yellowColors };
