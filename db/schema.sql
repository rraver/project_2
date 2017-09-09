           
drop database if exists sidehustle_projects;
create DATABASE sidehustle_projects;

USE sidehustle_projects;

CREATE TABLE sidehustle_projects (
    project_id int(11) not null,
    name varchar(255),
    project_key varchar(10),
	self varchar(255),
    primary key(project_id)
);

select * from sidehustle_projects;