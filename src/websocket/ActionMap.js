/**
 * Created by uttam on 12/22/17.
 */

import * as Types from './Types';
import * as Common from '../screens/common/meta/actions';
import * as Company from '../screens/company/meta/actions';
// import * as Broker from '../../home/broker/meta/utils';
import * as MarketOverview from '../screens/market overview/meta/actions';
import * as TVModule from '../screens/tvmodule/meta/actions';

const CommonActions = {
    [Types.Floorsheet]: Common.Actions.addFloorsheetData,
    [Types.FloorsheetOneWeek]: Common.Actions.addOneWeekFloorsheetData,
    [Types.MarketDepth]: Common.Actions.addMarketDepthData,
    [Types.StockSymbols]: Common.Actions.addStockSymbolsForSearchBox,
    [Types.YesterdayPrice]: Common.Actions.setTickerYesterdayPrice,
    [Types.Notification]: Common.Actions.addNotifications,
    [Types.OneWeekDemandSupply]: Common.Actions.addOneWeekDemandSupply,
};

const CompanyActions = {
    [Types.TickerTimeSeries]: Company.Actions.setTickerTimeSeries,
    [Types.NepseStats]: Common.Actions.setNepseStats,
};

const BrokerActions = {
};

const MarketOverviewActions = {
    [Types.IndexService]: MarketOverview.Actions.addIndex,
    [Types.IndexList]: MarketOverview.Actions.updateIndexList,
    [Types.TopGainers]: MarketOverview.Actions.addTopGainers,
    [Types.TopLosers]: MarketOverview.Actions.addTopLosers,
    [Types.MostActive]: MarketOverview.Actions.addMostActive,
    [Types.TurnoverService]: MarketOverview.Actions.addTopTurnover,
    [Types.TopSharesTraded]: MarketOverview.Actions.addTopSharesTraded,
    [Types.TickerInfo]: MarketOverview.Actions.addTickerInfo,
    [Types.ExtraTickerInfo]: MarketOverview.Actions.addTickerInfo,
    [Types.DemandSupply]: MarketOverview.Actions.addDemandSupply,
    [Types.MoneyPressure]: MarketOverview.Actions.addMoneyPressure,
};

const TVModuleActions = {
    [Types.EventService]: TVModule.Actions.addEvents,
    [Types.Logo]: TVModule.Actions.setLogo,
};

const ActionMap = {
    ...CommonActions,
    ...CompanyActions,
    ...BrokerActions,
    ...MarketOverviewActions,
    ...TVModuleActions,
};

export default ActionMap;
