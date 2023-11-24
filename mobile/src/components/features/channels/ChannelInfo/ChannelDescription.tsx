import { IonButton, IonItem, IonLabel } from "@ionic/react"

export const ChannelDescription = ({ description }: { description: string }) => {
    return (
        <IonItem>
            <IonLabel className="ion-text-wrap">
                {description}
                <IonButton fill="clear" slot="end" size="small" className="inline-flex">See More</IonButton>
            </IonLabel>
        </IonItem>
    )
}