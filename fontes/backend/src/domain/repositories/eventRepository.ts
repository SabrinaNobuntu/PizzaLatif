import Event from '../../../src/infra/database/sequelize/models/event.model';

class EventRepository {
  async findAll(): Promise<Event[]> {
    return await Event.findAll();
  }

  async findById(id: string): Promise<Event | null> {
    return await Event.findByPk(id);
  }

  async create(data: Partial<Event>): Promise<Event> {
    return await Event.create(data);
  }

  async update(id: string, data: Partial<Event>): Promise<Event | null> {
    const event = await this.findById(id);
    if (!event) return null;
    return await event.update(data);
  }

  async delete(id: string): Promise<boolean> {
    const deleted = await Event.destroy({ where: { id } });
    return deleted > 0;
  }
}

export default new EventRepository();
