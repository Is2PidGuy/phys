/**
 * Created by uttam on 11/13/17.
 */
import * as Types from './Types';

export const subscribe = subscriptions => (
    {
        type: 'subscribe',
        data: subscriptions,
    }
);

const subscribeService = (type, data) => (
    {
        type,
        data,
    }
);

export const subscribeFloorsheet = (ticker, lastContractNumber) =>
    subscribeService(Types.Floorsheet, { ticker, lastContractNumber });

export const subscribeMarketDepth = (ticker, lastReceivedTimestamp) =>
    subscribeService(Types.MarketDepth, { ticker, lastReceivedTimestamp });

export const subscribeNotification = (ticker, lastReceivedTimestamp) =>
    subscribeService(Types.Notification, { ticker, lastReceivedTimestamp });

export const subscribeIndex = (index, lastReceivedTimestamp) =>
    subscribeService(Types.IndexService, { index, lastReceivedTimestamp });

export const subscribeIndexList = () => subscribeService(Types.IndexList);

export const subscribeTopGainers = () => subscribeService(Types.TopGainers);
export const subscribeTopLosers = () => subscribeService(Types.TopLosers);
export const subscribeMostActive = () => subscribeService(Types.MostActive);
export const subscribeTickerInfo = () => subscribeService(Types.TickerInfo);
export const subscribeExtraTickerInfo = () => subscribeService(Types.ExtraTickerInfo);
export const subscribeTurnover = () => subscribeService(Types.TurnoverService);
export const subscribeTopSharesTraded = () => subscribeService(Types.TopSharesTraded);
export const subscribeDemandSupply = () => subscribeService(Types.DemandSupply);
export const subscribeMoneyPressure = () => subscribeService(Types.MoneyPressure);
export const subscribeNepseStats = () => subscribeService(Types.NepseStats);
export const subscribeEvents = () => subscribeService(Types.EventService);

export const getLogo = () => ({ type: 'Logo' });

export const getStockSymbolsForSearchBox = () => (
    {
        type: Types.StockSymbols,
    }
);

export const getYesterdayPriceForTicker = ticker => (
    {
        type: Types.YesterdayPrice,
        data: {
            ticker,
        },
    }
);

export const getOneWeekFloorsheetData = ticker => (
    {
        type: Types.FloorsheetOneWeek,
        data: {
            ticker,
        },
    }
);

export const getOneWeekDemandSupply = ticker => (
    {
        type: Types.OneWeekDemandSupply,
        data: {
            ticker,
        },
    }
);

export const getTickerTimeSeries = (ticker, interval) => (
    {
        type: Types.TickerTimeSeries,
        data: {
            ticker,
            interval,
        },
    }
);
