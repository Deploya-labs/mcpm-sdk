export const makeParamsReplacer =
  (params: Record<string, string>) =>
  (str: string): string => {
    Object.entries(params).forEach(([key, value]) => {
      str = str.replace(`**{${key}}**`, value);
    });
    return str;
  };
