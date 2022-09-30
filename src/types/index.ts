import { MermaidConfig } from "../../deps/mermaid/src/config.type";

/**
 * diagram definition, don't need renderer or styles
 */
export interface DiagramDefinition {
  db: DbDefinition;
  // renderer: any;
  parser: any;
  // styles: any;
  //   init?: (config: MermaidConfig) => void;
}

export interface DbEntityAttributesDefinition {
  attributeType?: string;
  attributeName?: string;
  attributeKeyType?: string;
  attributeComment?: string;
}

export interface DbEntityDefinition {
  attributes: DbEntityAttributesDefinition[];
}

export interface DbRelationshipDefinition {
  entityA: string;
  roleA: string;
  entityB: string;
  relSpec: string;
}

export interface DbDefinition {
  Cardinality: Record<string, string>;
  Identification: Record<string, string>;
  addEntity: (name: string) => void;
  addAttributes: (entityName: string, attribs: any[]) => void;
  getEntities: () => Record<string, DbEntityDefinition>;
  addRelationship: (
    entA: string,
    rolA: string,
    entB: string,
    rSpec: string
  ) => void;
  getRelationships: () => DbRelationshipDefinition[];
  clear: () => void;
}
