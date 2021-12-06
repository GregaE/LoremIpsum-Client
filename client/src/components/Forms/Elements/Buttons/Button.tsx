export default function Button({ name, callback, handleSubmitType }: any) {
  return (
    <div className="btn-container flex flex-row">
      <button
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-base font-medium rounded-md text-primary bg-light hover:scale-150 hover:bg-primary-x hover:text-light transition"
        onClick={() => callback()}
      >
        {name}
      </button>
    </div>
  );
}
