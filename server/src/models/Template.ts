import { Table, AllowNull, AutoIncrement, Column, DataType, Model, PrimaryKey, Unique, Default } from "sequelize-typescript";
import { HasOne } from "sequelize/types";
import User from "./User";

@Table({tableName: "templates"})
export default class Template extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number

    //тип шаблона
    @Column(DataType.Type)
    typeTemplate!: Type;

    //Содержание
    @AllowNull(false)
    @Column(DataType.Text)
    content!: Text;

    //организация
    @Column(DataType.String)
    organization!: string;

    //Дата создания
    @CreatedAt
    @Column(DataType.Date)
    creationDate!: Date


    //дата отъезда
    @Column(DataType.Date)
    departureDate!: Date


    //От кого
    @Column(DataType.User)
    fromUser!:User; //массив нельзя

    //Кому
    @Column(DataType.User)
    toUser!:User; //массив нельзя

    //комментарий
    @Column(DataType.Text)
    commentTemplate!: Text;

    //количество дней
    @Column(DataType.INTEGER)
    duringAbsence!: number;

    //дата окончания отпуска
    @Column(DataType.Date)
    endVacationDate!: Date

    //продолжительность
    @Column(DataType.INTEGER)
    duringApp!: number

    //наименование шаблона

    @Column(DataType.STRING)
    templateName!: string;
}