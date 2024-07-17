export default function Footer() {
  return (
    <footer
      className={
        'border-t-[1px] border-primary pt-4 text-center flex gap-2 justify-center'
      }
    >
      <a href="mailto:eldar.mussagali@gmail.com">eldar.mussagali@gmail.com</a>
      <div>|</div>
      <div>{new Date().getFullYear()}</div>
    </footer>
  );
}
