import { DateInput, Create, NumberInput, ReferenceInput, SimpleForm, TextInput, ImageInput } from 'react-admin';

export const CreateProducts = () => (
    <Create>
        <SimpleForm>
            <ImageInput source="imagen" />
            <TextInput source="nombre" />
            <NumberInput source="precio" />
        </SimpleForm>
    </Create>
);