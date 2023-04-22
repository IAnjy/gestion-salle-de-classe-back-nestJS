CREATE OR REPLACE FUNCTION audit_prof_function()
	RETURNS TRIGGER
	LANGUAGE PLPGSQL
AS 
$body$
BEGIN
	IF TG_OP = 'DELETE' THEN
		INSERT INTO professeur_audit (type_operation,utilisateur,old_codeprof, old_nom,old_prenom, old_grade, date_maj)
		VALUES (TG_OP,OLD.userid,  OLD.codeprof, OLD.nom, OLD.prenom, OLD.grade, NOW() );
		RETURN OLD;
	ELSIF TG_OP = 'INSERT' THEN
		INSERT INTO professeur_audit (type_operation,utilisateur, new_codeprof,  new_nom,new_prenom, new_grade, date_maj)
		VALUES (TG_OP,NEW.userid,  NEW.codeprof, NEW.nom, NEW.prenom, NEW.grade, NOW() );
		RETURN NEW;
	ELSIF TG_OP = 'UPDATE' AND ( NEW.codeprof <> OLD.codeprof OR NEW.nom <> OLD.nom OR  NEW.prenom <>OLD.prenom OR  NEW.grade <>OLD.grade ) THEN
		INSERT INTO professeur_audit (type_operation, utilisateur, old_codeprof, old_nom,old_prenom, old_grade, new_codeprof, new_nom,new_prenom, new_grade, date_maj)
		VALUES (TG_OP, OLD.userid, OLD.codeprof, OLD.nom, OLD.prenom, OLD.grade, NEW.codeprof, NEW.nom, NEW.prenom, NEW.grade, NOW());
		RETURN NEW;
	END IF;
	
END;
$body$

--------------------------------------- salle --------------------------------------

CREATE OR REPLACE FUNCTION audit_salle_function()
	RETURNS TRIGGER
	LANGUAGE PLPGSQL
AS 
$body$
BEGIN
	IF TG_OP = 'DELETE' THEN
		INSERT INTO salle_audit (type_operation,utilisateur,old_codesal, old_designation ,date_maj)
		VALUES (TG_OP,OLD.userid,  OLD.codesal, OLD.designation, NOW() );
		RETURN OLD;
	ELSIF TG_OP = 'INSERT' THEN
		INSERT INTO salle_audit (type_operation,utilisateur, new_codesal,  new_designation, date_maj)
		VALUES (TG_OP,NEW.userid,  NEW.codesal, NEW.designation, NOW() );
		RETURN NEW;
	ELSIF TG_OP = 'UPDATE' AND ( NEW.codesal <> OLD.codesal OR NEW.designation <> OLD.designation ) THEN
		INSERT INTO salle_audit (type_operation, utilisateur, old_codesal, old_designation, new_codesal, new_designation, date_maj)
		VALUES (TG_OP, OLD.userid, OLD.codesal, OLD.designation, NEW.codesal, NEW.codesal, NOW());
		RETURN NEW;
	END IF;
	
END;
$body$

--------------------------------------- occuper --------------------------------------

CREATE OR REPLACE FUNCTION audit_occuper_function()
	RETURNS TRIGGER
	LANGUAGE PLPGSQL
AS 
$body$
BEGIN
	IF TG_OP = 'DELETE' THEN
		INSERT INTO occuper_audit (type_operation,utilisateur,old_prof, old_sal, old_date,date_maj)
		VALUES (TG_OP,OLD.userid,  OLD.idprof, OLD.idsal, OLD.date, NOW() );
		RETURN OLD;
	ELSIF TG_OP = 'INSERT' THEN
		INSERT INTO occuper_audit (type_operation,utilisateur, new_prof,  new_sal, new_date, date_maj)
		VALUES (TG_OP,NEW.userid,  NEW.idprof, NEW.idsal, NEW.date, NOW() );
		RETURN NEW;
	ELSIF TG_OP = 'UPDATE' AND ( NEW.idprof <> OLD.idprof OR NEW.idsal <> OLD.idsal  OR NEW.date <> OLD.date ) THEN
		INSERT INTO occuper_audit (type_operation, utilisateur, old_prof, old_sal,old_date, new_prof, new_sal, new_date, date_maj)
		VALUES (TG_OP, OLD.userid, OLD.idprof, OLD.idsal, OLD.date,  NEW.idprof, NEW.idsal, NEW.date, NOW());
		RETURN NEW;
	END IF;
	
END;
$body$



CREATE TRIGGER audit_prof
	BEFORE UPDATE 
	on professeurs
	FOR EACH ROW 
	EXECUTE PROCEDURE audit_prof_function();
	
CREATE TRIGGER audit_prof_on_delete
	BEFORE DELETE
	on professeurs
	FOR EACH ROW 
	EXECUTE PROCEDURE audit_prof_function();

CREATE TRIGGER audit_prof_on_insert
	AFTER INSERT 
	on professeurs
	FOR EACH ROW 
	EXECUTE PROCEDURE audit_prof_function();



CREATE TRIGGER audit_salle
	BEFORE UPDATE 
	on salles
	FOR EACH ROW 
	EXECUTE PROCEDURE audit_salle_function();
	
CREATE TRIGGER audit_salle_on_delete
	BEFORE DELETE
	on salles
	FOR EACH ROW 
	EXECUTE PROCEDURE audit_salle_function();

CREATE TRIGGER audit_salle_on_insert
	AFTER INSERT 
	on salles
	FOR EACH ROW 
	EXECUTE PROCEDURE audit_salle_function();


	

CREATE TRIGGER audit_occuper
	BEFORE UPDATE 
	on occuper
	FOR EACH ROW 
	EXECUTE PROCEDURE audit_occuper_function();
	
CREATE TRIGGER audit_occuper_on_delete
	BEFORE DELETE
	on occuper
	FOR EACH ROW 
	EXECUTE PROCEDURE audit_occuper_function();

CREATE TRIGGER audit_occuper_on_insert
	AFTER INSERT 
	on occuper
	FOR EACH ROW 
	EXECUTE PROCEDURE audit_occuper_function();