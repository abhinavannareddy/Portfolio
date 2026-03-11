declare module 'gsap-trial/SplitText' {
  export class SplitText {
    constructor(target: any, vars: any);
    lines: HTMLElement[];
    words: HTMLElement[];
    chars: HTMLElement[];
    revert(): void;
  }
}

declare module 'gsap-trial/ScrollSmoother' {
  export class ScrollSmoother {
    static create(vars: any): ScrollSmoother;
    scrollTop(): number;
    scrollTo(target: any, smooth?: boolean, position?: string): void;
  }
}
