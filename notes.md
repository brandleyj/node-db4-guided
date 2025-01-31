# Data Modeling Notes

## Requirements

A client has hired you to build an API for managing `zoos` and the `animals` kept at each `zoo`. The API will be use for `zoos` in the _United States of America_, no need to worry about addresses in other countries.

For the `zoos` the client wants to record:

- name.
- address.

For the `animals` the client wants to record:

- name.
- species.
- list of all the zoos where they have resided.

Determine the database tables necessary to track this information.
Label any relationships between table.

## A good data model

- captures ALL the information the system needs.
- captures ONLY the information the system needs.
- reflect reality ( from the POV of the system ).
- is flexible, can evolve with the system.
- guarantees `data integrity`, without sacrificing too much performance.
- is driven by the way we access data.

## Components

- entities (nouns: zoo, animal, species), like a resource --> tables.
- properties --> columns or fields.
- relationships --> Foreign Keys (FK).

## Workflow

- identify entities (real and transactional).
- identify the properties.
- identify relationships.

## Relationships

- one to one
- one to many
- many to many

## Mantras

- every table must have a primary key
- work on **two or three** entities at a time
- **one to many** relationships are modeled using a **Foreign Key**
- the **Foreign Key** always goes in the many side
- the **Foreign Key Column** must be the same type as the **Primary Key** it references.
- **many to many** relationships are modeled using a **third table**.
- the third table could include
