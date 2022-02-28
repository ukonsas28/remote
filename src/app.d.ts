declare module "RemoteApp" {
  type PropsType = {
    name?: string;
    count?: number;
  };

  export const RemoteApp: (props: PropsType) => JSX.Element;
}
