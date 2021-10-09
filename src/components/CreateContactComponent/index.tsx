import React, {FC} from 'react';
import {Image, Text, View} from 'react-native';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import styles from './styles';
import CountryPicker from 'react-native-country-picker-modal';
import {DEFAULT_IMAGE_URI} from '../../constants/general';
import {FormInputs} from '../../screens/Register';

interface Prop {
  form?: FormInputs;
  setForm?: any;
  onChangeText?: ({name, value}: any) => any;
  onSubmit?: () => void;
  loading?: boolean;
  error?: string;
  data?: {};
}

const CreateContactComponent: FC<Prop> = ({
  form,
  setForm,
  onSubmit,
  onChangeText,
  loading,
  error,
  data,
}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: DEFAULT_IMAGE_URI}} style={styles.defaultImage} />
      <Text style={styles.choose}>Choose photo</Text>
      <Input
        label="First name"
        placeholder="Enter first name"
        onChangeText={value => {
          onChangeText({name: 'firstName', value: value});
        }}
        error={error?.first_name?.[0]}
      />
      <Input
        label="Last name"
        placeholder="Enter last name"
        onChangeText={value => {
          onChangeText({name: 'lastName', value: value});
        }}
        error={error?.last_name?.[0]}
      />
      <Input
        label="Phone number"
        placeholder="Enter phone number"
        error={error?.phone_number?.[0]}
        onChangeText={value => {
          onChangeText({name: 'phoneNumber', value: value});
        }}
        icon={
          <CountryPicker
            withFilter
            withFlag
            countryCode={form?.countryCode || undefined}
            withCallingCodeButton
            withCountryNameButton={false}
            withEmoji
            onSelect={v => {
              const phoneCode = v.callingCode[0];
              const cCode = v.cca2;
              setForm({...form, phoneCode, countryCode: cCode});
            }}
          />
        }
        iconPosition="left"
      />
      <CustomButton
        title="Submit"
        loading={loading}
        disabled={loading}
        onSubmit={onSubmit}
        primary
      />
    </View>
  );
};

export default CreateContactComponent;