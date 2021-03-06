import React, {FC} from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import Icon from '../Icon';
import styles from './styles';

interface Prop {
  visible: boolean;
  setVisible?: any;
  title?: string;
  ViewBody?: any;
  ViewFooter?: any;
  closeOnTouch?: boolean | true;
}

const AppModal: FC<Prop> = ({
  visible,
  setVisible,
  title,
  ViewBody,
  ViewFooter,
  closeOnTouch,
}) => {
  return (
    <Modal visible={visible} transparent>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          if (closeOnTouch) {
            setVisible(false);
          }
        }}>
        <View style={styles.modalView}>
          <View style={styles.header}>
            <Icon
              type="Ionicons"
              name="close"
              size={21}
              onPress={() => setVisible(false)}
            />
            <Text style={styles.title}>{title ? title : 'RnContacts'}</Text>
            <View />
            <View />
            <View />
            <View />
            <View />
            <View />
            <View />
            <View />
            <View />
          </View>
          {ViewBody && <View style={styles.body}>{ViewBody}</View>}
          <View>
            {ViewFooter ? (
              ViewFooter
            ) : (
              <View style={styles.footer}>
                <Text>Privacy policy</Text>
                <View style={styles.dot} />
                <Text>Terms of service</Text>
              </View>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default AppModal;
