import { useGetChannelData } from "@/hooks/useGetChannelData"
import { IonItemGroup, IonItemDivider, IonLabel } from "@ionic/react"
import { EditChannelInfoButton } from "./EditChannelInfo"
import { ChannelDescription, ChannelName } from "."

export const ChannelInfoSection = ({ channelID }: { channelID: string }) => {

    const { channel } = useGetChannelData(channelID)

    return (
        <IonItemGroup>
            <IonItemDivider className="bg-transparent text-sm text-zinc-300 pt-2">
                <IonLabel>Channel Info</IonLabel>
                <EditChannelInfoButton />
            </IonItemDivider>
            {channel?.channel_name && <ChannelName name={channel.channel_name} />}
            {channel?.channel_description && <ChannelDescription description={channel.channel_description} />}
        </IonItemGroup>
    )
}