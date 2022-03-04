import { useState } from "react";

interface IProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  defaultImage?: string;
}

export const Image = ({ src, defaultImage, ...rest }: IProps) => {
  const [srcState, setSrcState] = useState(src);

  const onError = () => {
    setSrcState(defaultImage);
  };

  return <img src={srcState} {...rest} onError={onError} />;
};
