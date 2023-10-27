import { OfficialMCC, StripeMCC, VisaMCC } from './mcc';

export const getMCC = (mcc: number | string | undefined, network?: string) => {
    if (!mcc) {
        return 'No MCC';
    }
    const code = typeof mcc === 'string' ? parseInt(mcc) : mcc;
    if (isNaN(code)) {
        return 'Invalid MCC';
    }
    if (network?.toLowerCase() === 'visa') {
        return VisaMCC[code];
    } else if (network?.toLowerCase() === 'stripe') {
        return StripeMCC[code];
    }
    return OfficialMCC[code];
};
