import Vote from './vote';
import EntityType from './entity-type';
import Idea from './idea';
import Receipt from './receipt';
declare type Entity = {
    entityType: EntityType;
    entity: Vote | Idea | Receipt;
};
export default Entity;
