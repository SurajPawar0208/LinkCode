const FormInput = ({ label, type = 'text', register, error, ...props }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">{label}</label>
      <input
        type={type}
        className={`input ${error ? 'border-danger' : ''}`}
        {...register}
        {...props}
      />
      {error && <p className="text-danger text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default FormInput;
