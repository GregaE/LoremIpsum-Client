//@ts-nocheck => Form component is hating the type needs refactor
import { Forms, formKey } from '../../../../utils/Lookups';
import { useTypedSelector } from '../../../../utils/useTypeSelector';

export default function ItemEditor() {
  const { identifier, id, meta } = useTypedSelector(state => state.toggleModal);
  const selectForm = (formType: string) => {
    const formKey = formType as formKey;
    if (formType && Object.keys(Forms).includes(formType)) {
      return Forms[formKey];
    }
  };
  const FormComponent = selectForm(identifier);
  return (
    <div className="w-full">
      <FormComponent recordType={!id ? 'NEW' : 'UPDATE'} id={id} date={meta} />
    </div>
  );
}
