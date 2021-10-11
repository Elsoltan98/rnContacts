import {useNavigation} from '@react-navigation/native';
import React, {useContext, useRef, useState} from 'react';
import CreateContactComponent from '../../components/CreateContactComponent';
import {CONTACT_LIST} from '../../constants/routeNames';
import createContact from '../../context/actions/contacts/createContact';
import {GlobalContext} from '../../context/Provider';
import {FormInputs} from '../Register';

const CreateContact = () => {
  const {navigate}: any = useNavigation();
  const [form, setForm] = useState<FormInputs>({});
  const onChangeText = ({name, value}: any) => {
    setForm({...form, [name]: value});
  };

  const sheetRef = useRef(null);

  const {
    contactsDispatch,
    contacts: {
      createContacts: {data, error, loading},
    },
  }: any = useContext(GlobalContext);

  const onSubmit = () => {
    createContact(form)(contactsDispatch)(() => {
      navigate(CONTACT_LIST);
    });
  };

  const toggleSwitch = () => {
    setForm({...form, isFavorite: !form.isFavorite});
  };

  const closeSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.close();
    }
  };
  const openSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.open();
    }
  };

  return (
    <CreateContactComponent
      form={form}
      setForm={setForm}
      onChangeText={onChangeText}
      onSubmit={onSubmit}
      error={error}
      loading={loading}
      data={data}
      toggleSwitch={toggleSwitch}
      openSheet={openSheet}
      closeSheet={closeSheet}
      sheetRef={sheetRef}
    />
  );
};

export default CreateContact;
