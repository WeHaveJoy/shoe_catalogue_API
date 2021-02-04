create table brands(
    brand_id serial not null primary key,
    brand_name text not null
);

create table colours(
    colour_id serial not null primary key,
    colour text not null
);

create table sizes(
size_id serial not null primary key,
size int not null
);

create table shoes(
    shoe_id serial not null primary key,
    shoe_name text not null,
    foreign key (shoe_id) references brands(brand_id),
    foreign key (shoe_id) references colours(colour_id),
    foreign key (shoe_id) references sizes(size_id)
);


create table brands(
    brand_id serial not null primary key,
    brand_name text not null
);

create table colours(
    colour_id serial not null primary key,
    colour text not null
);

create table sizes(
size_id serial not null primary key,
size int not null
);

create table shoes(
    shoe_id serial not null primary key,
    shoe_name text not null,
    foreign key (shoe_id) references brands(brand_id),
    foreign key (shoe_id) references colours(colour_id),
    foreign key (shoe_id) references sizes(size_id)
);


