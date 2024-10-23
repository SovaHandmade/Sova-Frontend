import { useRef } from "react";
import { FilterBox } from "../../components/FilterBox";
import "./CreateProduct.scss";

export const CreateProduct = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileInputClick = () => {
    if (!fileInputRef.current) {
      return;
    }

    fileInputRef.current.click();
  };

  return (
    <div className="create-product">
      <img
        className="create-product__image"
        src="/product-photo/1.jpg"
        alt="Product photo"
      />

      <div className="create-product__form-container">
        <button className="create-product__form-file-button">
          <img src="/icons/plus.svg" alt="Plus icon" />
          Додати фотографію
        </button>

        <form className="create-product__form" action="">
          <input
            className="create-product__form-file-input"
            ref={fileInputRef}
            type="file"
          />

          <input placeholder="Назва" type="text" />
          <input placeholder="Розмір" type="text" />
          <input placeholder="Матеріал" type="text" />
          <input placeholder="Колір" type="text" />
          <input placeholder="Опис" type="text" />
          <input placeholder="Ціна" type="text" />
        </form>
      </div>

      <div className="create-product__filters">
        <FilterBox showButtons={false} />
      </div>

      <button className="create-product__bottom create-product__bottom-button-left">
        Скасувати
      </button>

      <button className="create-product__bottom create-product__bottom-button-right">
        Застосувати
      </button>
    </div>
  );
};
