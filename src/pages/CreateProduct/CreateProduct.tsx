import { useEffect, useRef } from "react";
import { FilterBox } from "../../components/FilterBox";
import { isLoggedIn, profile } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import "./CreateProduct.scss";

export const CreateProduct = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleFileInputClick = () => {
    if (!fileInputRef.current) {
      return;
    }

    fileInputRef.current.click();
  };

  const fetch = async () => {
    if (!isLoggedIn() || !(await profile()).isStaff) {
      navigate("/auth");
    }
  };

  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="create-product">
      <img
        className="create-product__image"
        src="/product-photo/1.jpg"
        alt="Product photo"
      />

      <div className="create-product__form-container">
        <button
          className="create-product__form-file-button button--secondary"
          onClick={handleFileInputClick}
        >
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

      <button className="create-product__bottom create-product__bottom-button-left button--secondary">
        Скасувати
      </button>

      <button className="create-product__bottom create-product__bottom-button-right">
        Застосувати
      </button>
    </div>
  );
};
