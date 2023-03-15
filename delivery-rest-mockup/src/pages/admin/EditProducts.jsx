import { DateInput, Edit, NumberInput, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const EditProducts = () => (
    <Edit>
        <SimpleForm>
            <ImageInput source="imagen" />
            <DateInput source="updated" />
            <TextInput source="expand" />
        </SimpleForm>
    </Edit>
);