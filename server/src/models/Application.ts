import { Table, AllowNull, AutoIncrement, Column, DataType, Model, PrimaryKey, Unique, Default } from "sequelize-typescript";
import { HasOne } from "sequelize/types";
import User from "./User";
import Template from "./Template";

@Table({tableName: "applications"})
export default class Application extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number

    //status
    @Column(DataType.Status)
    status!: Status.NEW;

    //рег номер
    @AllowNull(false)
    @AutoIncrement
    @Unique
    @Column(DataType.INTEGER)
    regNumber!: number;

    //создатель заявки
    @BelongsTo(()=>User)
    @Column(DataType.User)
    owner!: User;

    //Дата создания
    @CreatedAt
    @Column(DataType.Date)
    creationDate!: Date

    //Подписанты
    //@HasMany(()=>User)
    @Column(DataType.User)
    signers!: User; //массив нельзя

    //комментарий
    @Column(DataType.Text)
    comment!: Text;

    //дата начала отпуска
    @Column(DataType.Date)
    beginVacationDate!: Date;

    //дата окончания отпуска
    @Column(DataType.Date)
    endVacationDate!: Date;

    //продолжительность
    @Column(DataType.INTEGER)
    duringApp!: number;

    //наименование шаблона

    @Column(DataType.STRING)
    templateName!: string;

    //шаблон
    //@BelongsTo(()=>Template)
    @Column(DataType.Template)
    template!: Template;

}