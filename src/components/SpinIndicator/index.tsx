import styles from "./index.module.css";

export function SpinIndicator() {
  return (
    <div className="m-a h-[100px] w-[100px]">
      <div className={styles.loaderBounce} />
    </div>
  );
}
