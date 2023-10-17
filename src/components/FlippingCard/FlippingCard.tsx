import { FC } from "react";
import "./FlippingCard.scss";

export interface IFlippingCardProps {
  frontNumber: number;
  backNumber: number;
}

const FlippingCard: FC<IFlippingCardProps> = (props: IFlippingCardProps) => {
  return (
    <div className="flipping-card">
      <div className="flipping-card__front">
        {props.frontNumber}
      </div>
      <div className="flipping-card__back">
        {props.backNumber}
      </div>
    </div>
  );
};

export default FlippingCard;
