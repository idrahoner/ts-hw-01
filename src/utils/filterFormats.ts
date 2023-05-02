import { IData } from "components/Statistics/Statistics";

export function filterFormats(array: IData[]) {
  return array.reduce((accum: IData[], element) => {
    const repeatedFormat: IData | undefined = accum.find(
      (accElement: IData) => accElement.label === element.label
    );

    if (repeatedFormat) {
      repeatedFormat.percentage += element.percentage;
    } else {
      accum.push(element);
    }
    return accum;
  }, []);
}
