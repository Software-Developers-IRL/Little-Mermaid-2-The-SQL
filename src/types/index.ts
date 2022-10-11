export interface MarkdownInputSettingsI {
  src: string;
  isRaw: boolean;
  outputName: string; 
  database: string;
}

export interface MarkdownContentResponseI {
  content: string;
  settings: MarkdownInputSettingsI;
}

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
  attributeKeyType?: "PK" | "FK";
  attributeComment?: string;
}

export interface DbEntityDefinition {
  attributes: DbEntityAttributesDefinition[];
}

export interface DbRelSpec {
  cardA: string;
  cardB: string;
  relType: string;
}

export interface DbRelationshipDefinition {
  entityA: string;
  roleA: string;
  entityB: string;
  relSpec: DbRelSpec;
}

export interface DbDefinition {
  Cardinality: Record<string, string>;
  Identification: Record<string, string>;
  addEntity: (name: string) => void;
  addAttributes: (entityName: string, attribs: DbEntityAttributesDefinition[]) => void;
  getEntities: () => Record<string, DbEntityDefinition>;
  addRelationship: (
    entA: string,
    rolA: string,
    entB: string,
    rSpec: DbRelSpec
  ) => void;
  getRelationships: () => DbRelationshipDefinition[];
  clear: () => void;
}
