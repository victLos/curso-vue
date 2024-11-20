export class PubSub<T> {
    suscriptors = new Map<string, [(data: T) => void]>();

    emit(channel: string, data: T) {
        const channelSuscriptor = this.suscriptors.get(channel);
        if (channelSuscriptor) {
            channelSuscriptor.forEach(f => f(data))
        }
    }

    on(channel: string, handler: (data: T) => void) {

        let channelSuscriptor = this.suscriptors.get(channel);

        if (!channelSuscriptor) {
            channelSuscriptor = [handler];
            this.suscriptors.set(channel, channelSuscriptor);
        } else {
            channelSuscriptor.push(handler);
        }
    }

    unsubscribe(channel: string, handler: (data: T) => void) {
        let channelSuscriptor = this.suscriptors.get(channel);
        if (channelSuscriptor) {
            const index = channelSuscriptor.indexOf(handler);
            if (index > -1) {
                channelSuscriptor.splice(index, 1);
                if (!channelSuscriptor.length) {
                    this.suscriptors.delete(channel);
                }
            }
        }

    }
}