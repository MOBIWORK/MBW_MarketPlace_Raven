import { IonModal, IonHeader, IonToolbar, IonButtons, IonButton, IonTitle } from "@ionic/react"
import { useRef } from "react"

interface EditChannelNameModalProps {
    presentingElement: HTMLElement | undefined,
    isOpen: boolean,
    onDismiss: VoidFunction,
}

export const EditChannelInfoModal = ({ isOpen, onDismiss, presentingElement }: EditChannelNameModalProps) => {

    const modal = useRef<HTMLIonModalElement>(null)

    const handleEditChannelName = () => {
        console.log("Save")
    }

    return (
        <IonModal ref={modal} onDidDismiss={onDismiss} isOpen={isOpen} presentingElement={presentingElement}>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton color="medium" onClick={() => onDismiss()}>
                            Cancel
                        </IonButton>
                    </IonButtons>
                    <IonTitle>
                        Edit Channel Info
                    </IonTitle>
                    <IonButtons slot="end">
                        <IonButton onClick={handleEditChannelName} strong={true}>
                            Save
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
        </IonModal>
    )
}