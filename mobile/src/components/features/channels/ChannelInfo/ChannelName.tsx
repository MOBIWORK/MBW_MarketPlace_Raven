import { IonItem, IonLabel } from "@ionic/react"

export const ChannelName = ({ name }: { name: string }) => {
    return (
        <IonItem>
            <IonLabel className="font-semibold">{name}</IonLabel>
        </IonItem>
    )
}