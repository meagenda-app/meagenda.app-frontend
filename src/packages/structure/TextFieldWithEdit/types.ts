export interface TextFieldWithEditProps {
  defaultValue: number | string;
  label?: string;
  handleEdit: (e: boolean) => void;
}
