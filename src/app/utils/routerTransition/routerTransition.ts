import {
  trigger,
  state,
  animate,
  transition,
  style
} from "@angular/animations";

export const fadeInAnimation = trigger("fadeInAnimation", [
  transition(":enter", [
    style({
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0
    }),
    animate(".3s", style({ opacity: 1 }))
  ])
]);

export const slideInOutAnimation = trigger("slideInOutAnimation", [
  state(
    "*",
    style({
      position: "fixed",
      top: "112px",
      left: 0,
      right: 0,
      bottom: 0
    })
  ),

  transition(":enter", [
    style({
      right: "-400%"
    }),

    animate(
      ".5s ease-in-out",
      style({
        right: 0
      })
    )
  ]),

  transition(":leave", [
    animate(
      ".5s ease-in-out",
      style({
        right: "-400%"
      })
    )
  ])
]);
