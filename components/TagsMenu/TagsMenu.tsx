import { getCategories } from "@/lib/api";
import css from "./TagsMenu.module.css";
import Link from "next/link";

const TagsMenu = async () => {
  const categories = await getCategories();
  return (
    <div className={css.menuContainer}>
      <button className={css.menuButton}>Notes ▾</button>
      <ul className={css.menuList}>
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`/notes/filter/${category.id}`}>{category.name}</Link>
          </li>
        ))}
        <li className={css.menuItem}>
          <a
            href={`url до сторінки за відповідним тегом`}
            className={css.menuLink}
          >
            Назва тегу
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TagsMenu;
