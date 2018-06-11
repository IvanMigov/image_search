
export const getClassName = (componentClassName = "") =>
  (elementClassName = null) =>
    [componentClassName]
      .concat(elementClassName)
      .join(elementClassName && elementClassName.indexOf("_") !== 0 ? "__" : "");

export const addModifierTo = (componentClassName = "") =>
  (modifier = null) => `${componentClassName}--${modifier}`;

