import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as HeartEmpty} from "img/heart-empty.svg";
import {
  Wrapper,
  LikeWrapper,
  Image,
  PriceWrapper,
  PriceRegular,
  PriceRegularWhenDiscounted,
  PriceDiscounted,
  Title,
  Desc,
} from './styled'
import Button from "../components/Button";

interface I_ProductCardProps {
  id: number
  slug?: string
  imgSrc: string
  priceRegular: number
  priceDiscounted?: number
  title: string
  desc: string
  // isLiked: boolean
  hideLikes?: boolean
}

const ProductCard: React.FC<I_ProductCardProps> = ({
  id,
  slug,
  imgSrc,
  priceRegular,
  priceDiscounted,
  title,
  desc,
  // isLiked,
  hideLikes = false,
})=> {

  return (
    <Wrapper>
      {!hideLikes && (
        <LikeWrapper
          data-product-id={id}

        >

          <HeartEmpty/>
        </LikeWrapper>
      )}

      <Link to={`/product/${slug || id}`}>
        <Image src={imgSrc}/>
      </Link>

      <PriceWrapper>
        {Number.isInteger(priceDiscounted) ? <>
          <PriceDiscounted>{priceDiscounted} ₽</PriceDiscounted>
          <PriceRegularWhenDiscounted>{priceRegular} ₽</PriceRegularWhenDiscounted>
        </> : (
          <PriceRegular>{priceRegular} ₽</PriceRegular>
        )}
      </PriceWrapper>

      <Title className='h4'>
        <Link to={`/product/${slug || id}`}>
          {title}
        </Link>
      </Title>

      <Desc>{desc}</Desc>

      <Button>В корзину</Button>
    </Wrapper>
  )
}
export default ProductCard;
