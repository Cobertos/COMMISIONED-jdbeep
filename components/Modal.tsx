import React, { useLayoutEffect } from 'react';
import styles from './Modal.module.scss';

export default function Modal(props: { isOpen?: boolean, onClose?: ()=>void, children?: string | React.ReactElement | React.ReactElement[], className?: string}) {
  return <div
    className={`modal ${props.isOpen ? 'is-active' : ''} ${props.className}`}
    role="dialog"
    aria-hidden={!props.isOpen}
  >
      <div className="modal-background" onClick={props.onClose}></div>
      <div className={`${styles["modal-content"]} modal-content`}>
        <div className="box">
          {props.children}
        </div>
      </div>
      <button
        className={`${styles["modal-close"]} modal-close is-large`}
        aria-label="close"
        onClick={props.onClose}
      />
    </div>;
}

export function useModal(isOpen: boolean) {
  useLayoutEffect(()=>{
    if (typeof window === "undefined") {
      return;
    }

    // If any modal is open, add is-clipped to body (bulma needs this to stop scroll)
    const hasModal = !!document.querySelector('.modal.is-active');
    const which = hasModal ? 'add' : 'remove';
    document.body.classList[which]('is-clipped');
  }, [isOpen]);
}
