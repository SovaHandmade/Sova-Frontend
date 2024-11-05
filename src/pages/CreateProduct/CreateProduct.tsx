import { useEffect, useRef, useState } from "react";
import { FilterBox } from "../../components/FilterBox";
import { createProduct, isLoggedIn, profile } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import "./CreateProduct.scss";

export const CreateProduct = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [topicIndex, setTopicIndex] = useState(1);
  const [formIndex, setFormIndex] = useState(1);

  const form = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();

  const handleTags = (form?: number, topic?: number) => {
    if (form !== undefined) {
      setFormIndex(form + 1);
    }

    if (topic !== undefined) {
      setTopicIndex(topic + 1);
    }
  };

  const handleCreate = async () => {
    if (!form.current) {
      return;
    }

    const formData = new FormData(form.current);

    formData.append("form", formIndex.toString());
    formData.append("topic", topicIndex.toString());

    const result = await createProduct(formData);

    if (!result) {
      return;
    }

    navigate(`/product/${result.id}`);
  };

  const handleFileInputClick = () => {
    if (!fileInputRef.current) {
      return;
    }

    fileInputRef.current.click();
  };

  const fetch = async () => {
    if (!isLoggedIn() || !(await profile()).is_staff) {
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

        <form
          className="create-product__form"
          ref={form}
          encType="multipart/form-data"
        >
          <input
            className="create-product__form-file-input"
            name="image"
            ref={fileInputRef}
            type="file"
            required
          />

          <input placeholder="Назва" name="name" type="text" required />
          <input placeholder="Розмір" name="size" type="text" required />
          <input placeholder="Матеріал" name="material" type="text" required />
          <input placeholder="Колір" name="color" type="text" required />
          <input placeholder="Опис" name="description" type="text" required />
          <input placeholder="Ціна" name="price" type="number" required />
        </form>
      </div>

      <div className="create-product__filters">
        <FilterBox showButtons={false} applyCallback={handleTags} />
      </div>

      <button className="create-product__bottom create-product__bottom-button-left button--secondary">
        Скасувати
      </button>

      <button
        className="create-product__bottom create-product__bottom-button-right"
        onClick={handleCreate}
      >
        Застосувати
      </button>
    </div>
  );
};
