<?php
declare(strict_types=1);
/**
 * @copyright Copyright (c) 2019 Joas Schilling <coding@schilljs.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

namespace OCA\Spreed\Model;

use OCP\AppFramework\Db\Entity;

/**
 * @method void setName(string $name)
 * @method string getName()
 * @method void setCommand(string $command)
 * @method string getCommand()
 * @method void setScript(string $name)
 * @method string getScript()
 * @method void setOutput(int $output)
 * @method int getOutput()
 */
class Command extends Entity {

	public const OUTPUT_NONE = 0;
	public const OUTPUT_USER = 1;
	public const OUTPUT_ALL = 2;

	/** @var string */
	protected $name;

	/** @var string */
	protected $command;

	/** @var string */
	protected $script;

	/** @var int */
	protected $output;

	public function __construct() {
		$this->addType('name', 'string');
		$this->addType('command', 'string');
		$this->addType('script', 'string');
		$this->addType('output', 'int');
	}
}
