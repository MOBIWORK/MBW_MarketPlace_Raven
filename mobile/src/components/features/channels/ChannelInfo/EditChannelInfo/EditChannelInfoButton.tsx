import { IonIcon } from "@ionic/react"
import { createOutline } from "ionicons/icons"
import { useState } from "react"
import { EditChannelInfoModal } from "."

export const EditChannelInfoButton = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <IonIcon slot='end' icon={createOutline} color='medium' onClick={() => setIsOpen(true)} />
            <EditChannelInfoModal isOpen={isOpen} onDismiss={() => setIsOpen(false)} presentingElement={undefined} />
        </>
    )
}