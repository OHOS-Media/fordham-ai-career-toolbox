import {
  f,
  r as l,
  aP as P,
  j as t,
  at as h,
  aQ as j,
  aR as B,
  a1 as E,
  au as H,
  aS as k,
  ar as I,
  ai as C,
  aT as R,
  o as S,
} from "./sanity-206b9142.js";
const T = f(S)`
  position: relative;
`;
function b(s) {
  const { children: o } = s,
    { collapsed: n } = B();
  return t.jsx(T, { hidden: n, height: "fill", overflow: "auto", children: o });
}
function y(s) {
  const { actionHandlers: o, index: n, menuItems: e, menuItemGroups: r, title: i } = s,
    { features: a } = E();
  return !(e != null && e.length) && !i
    ? null
    : t.jsx(H, {
        actions: t.jsx(k, { menuItems: e, menuItemGroups: r, actionHandlers: o }),
        backButton:
          a.backButton &&
          n > 0 &&
          t.jsx(I, {
            as: C,
            "data-as": "a",
            icon: R,
            mode: "bleed",
            tooltipProps: { content: "Back" },
          }),
        title: i,
      });
}
function v(s) {
  const { index: o, pane: n, paneKey: e, ...r } = s,
    { child: i, component: a, menuItems: u, menuItemGroups: d, type: U, ...p } = n,
    [c, m] = l.useState(null),
    { title: x = "" } = P(n);
  return t.jsxs(h, {
    id: e,
    minWidth: 320,
    selected: r.isSelected,
    children: [
      t.jsx(y, {
        actionHandlers: c == null ? void 0 : c.actionHandlers,
        index: o,
        menuItems: u,
        menuItemGroups: d,
        title: x,
      }),
      t.jsxs(b, {
        children: [
          j.isValidElementType(a) &&
            l.createElement(a, { ...r, ...p, ref: m, child: i, paneKey: e }),
          l.isValidElement(a) && a,
        ],
      }),
    ],
  });
}
export { v as default };
