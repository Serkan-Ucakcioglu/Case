function BarPopup({ setShow }: any) {
  return (
    <div
      className="popup shadow-xl bg-white mt-2 ml-10 py-6 px-4"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      se
    </div>
  );
}

export default BarPopup;
