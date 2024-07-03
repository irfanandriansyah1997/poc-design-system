import BaseModal from './Modal';
import ModalContent from './ModalContent';
import ModalFooter from './ModalFooter';
import type { ModalFnType } from './types';

// @ts-expect-error irfan@fithub.id
const Modal: ModalFnType = BaseModal;

Modal.Content = ModalContent;

Modal.Footer = ModalFooter;

export default Modal;
