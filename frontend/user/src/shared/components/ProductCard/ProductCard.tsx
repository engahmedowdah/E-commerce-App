import { Heart } from "lucide-react";
import "./ProductCard.css";

export interface ProductCardProps {
  brand: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  bg: string;
  badge?: string;
  badgeVariant?: "new" | "sale" | "sold";
  colors?: string[];
  onClick?: () => void;
  onAddCart?: (e: React.MouseEvent) => void;
}

export function ProductCard({
  brand,
  name,
  price,
  originalPrice,
  image,
  bg,
  badge,
  badgeVariant = "new",
  colors,
  onClick,
  onAddCart,
}: ProductCardProps) {
  return (
    <article className="figma-product-card" onClick={onClick} onKeyDown={(e) => e.key === "Enter" && onClick?.()} role={onClick ? "button" : undefined} tabIndex={onClick ? 0 : undefined}>
      <div className="figma-product-card__media" style={{ background: bg }}>
        {badge && (
          <span className={`figma-product-card__badge figma-product-card__badge--${badgeVariant}`}>
            {badge}
          </span>
        )}
        <button type="button" className="figma-product-card__fav" onClick={(e) => e.stopPropagation()} aria-label="مفضلة">
          <Heart size={18} />
        </button>
        <img src={image} alt={name} className="figma-product-card__img" />
      </div>
      <div className="figma-product-card__body">
        <p className="figma-product-card__brand">{brand}</p>
        <h3 className="figma-product-card__name">{name}</h3>
        <div className="figma-product-card__footer">
          <div className="figma-product-card__prices">
            <span className="figma-product-card__price">{price} ر.س</span>
            {originalPrice && (
              <span className="figma-product-card__price-old">{originalPrice} ر.س</span>
            )}
          </div>
          {colors && colors.length > 0 && (
            <div className="figma-product-card__colors">
              {colors.map((c) => (
                <span key={c} className="figma-product-card__dot" style={{ background: c }} />
              ))}
            </div>
          )}
          {onAddCart && (
            <button type="button" className="figma-product-card__cart" onClick={onAddCart}>
              أضف
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
